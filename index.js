// Lắng nghe sự kiện click vào thẻ <a>
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngừng hành động mặc định của thẻ <a>

    // Thêm lớp fade-out vào body để làm mờ dần trang
    document.body.classList.add("fade-out");

    // Sau khi hiệu ứng hoàn tất, chuyển đến trang mới
    setTimeout(() => {
      window.location.href = link.getAttribute("href");
    }, 300); // Thời gian trễ phải bằng với thời gian của hiệu ứng CSS
  });
});
