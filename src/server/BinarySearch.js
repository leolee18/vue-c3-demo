function BinarySearch(arr, target) {
    let s = 0;
    let e = arr.length - 1;
    let m = Math.floor((s + e) / 2);
    let sortTag = arr[s] <= arr[e];//确定排序顺序

    while (s < e && arr[m] !== target) {
        if (arr[m] > target) {
            sortTag && (e = m - 1);
            !sortTag && (s = m + 1);
        } else {
            !sortTag && (e = m - 1);
            sortTag && (s = m + 1);
        }
        m = Math.floor((s + e) / 2);
    }

    if (arr[m] == target) {
        console.log('找到了,位置%s', m);
        return m;
    } else {
        console.log('没找到');
        return -1;
    }

}



export default BinarySearch;