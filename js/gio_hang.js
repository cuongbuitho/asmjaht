function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;

    return itemGioHang;
}

function layGioHangTuLocalStorage() {
    var danhSachItemGioHang = new Array();

    var jsonDanhSachItemGioHang = localStorage.getItem('gioHang');
    if (jsonDanhSachItemGioHang != null) {
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }

    return danhSachItemGioHang;
}
function themVaoGioHang(idSanPham, danhSachItemGioHang) {
    var danhSachItemGioHangSauKhiDuocThem = danhSachItemGioHang;
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    danhSachItemGioHangSauKhiDuocThem.push(itemGioHang);

    return danhSachItemGioHang;
}
function luuGioHangXuongLocalStorage(danhSachItemGioHang) {
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

    localStorage.setItem('gioHang', jsonDanhSachItemGioHang);
}
function capnhatTongtien() {
    var giohang = document.getElementsByClassName('column-cart')[0]
    var hang_GioHang = document.getElementsByClassName('cart-item')
  
    var thanhTien = 0;
    for (var i = 0; i < hang_GioHang.length; i++) {
  
      var hang = hang_GioHang[i]
      var _Gia = hang.getElementsByClassName('gia')[0]
      var _Soluong = hang.getElementsByClassName('soLuong')[0];
                   
      // var gia = parseFloat(_Gia.innerText.replace('đ', ''))
      var gia = parseFloat(_Gia.innerText.replace('đ', '').replace('.', ''))
  
      var sl = _Soluong.value // giá trị số lượng
      thanhTien += gia * sl; // tổng tiền = giá * sl
  
      //console.log(tongTien);
  
  
    }
}