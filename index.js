let img = document.getElementById("img");
let btnSubmit = document.querySelector(".btnSubmit");
btnSubmit.addEventListener("click", function () {
  let urlImg = document.getElementById("urlImg").value;
  console.log(urlImg);
  if (!urlImg == "") {
    img.src = urlImg;
  }
});

let styles = ` 
  blur(0px) 
  brightness(1) 
  contrast(100%) 
  grayscale(0%) 
  hue-rotate(0deg) 
  invert(0%) 
  opacity(1) 
  saturate(1) 
  sepia(0)
  `;
img.style.filter = styles;

let prop__css = document.querySelector(".prop__css");
prop__css.innerHTML = `filter : ${styles}`;
document.addEventListener("input", updateValue);
function updateValue(e) {
  let blur = document.getElementById("blur").value;
  let brightness = document.getElementById("brightness").value;
  let contrast = document.getElementById("contrast").value;
  let grayscale = document.getElementById("grayscale").value;
  let huerotate = document.getElementById("huerotate").value;
  let invert = document.getElementById("invert").value;
  let opacity = document.getElementById("opacity").value;
  let saturate = document.getElementById("saturate").value;
  let sepia = document.getElementById("sepia").value;

  if (e.target.id == "chooseImg") {
    // Đây là JavaScript của trình xử lý sự kiện onchange.
    // Nó lấy đối tượng File đã được truyền dưới dạng event.target.files[0]
    // xây dựng FileReader để đọc nội dung của nó và thiết lập trình xử lý sự kiện mới để gán dữ liệu kết quả: URL cho thẻ img:
    var selectedFile = e.target.files[0];
    var reader = new FileReader();
    img.title = selectedFile.name;
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
  }

  styles = ` 
  blur(${blur}px) 
  brightness(${brightness / 100}) 
  contrast(${contrast}%) 
  grayscale(${grayscale}%) 
  hue-rotate(${huerotate}deg) 
  invert(${invert}%) 
  opacity(${opacity / 100}) 
  saturate(${saturate / 10}) 
  sepia(${sepia / 100})
  `;
  img.style.filter = styles;

  prop__css.innerHTML = `filter : blur(${blur}px) 
  brightness(${brightness / 100}) 
  contrast(${contrast}%) 
  grayscale(${grayscale}%) 
  hue-rotate(${huerotate}deg) 
  invert(${invert}%) 
  opacity(${opacity / 100}) 
  saturate(${saturate / 10}) 
  sepia(${sepia / 100})`;
}

let box_generate = document.querySelector(".box_generate");
let btnCopy = document.querySelector(".copy");
let btnCopied = document.querySelector(".copied");

box_generate.addEventListener("mouseenter", function () {
  btnCopy.classList.add("show");
});
box_generate.addEventListener("mouseleave", function () {
  btnCopy.classList.remove("show");
});
btnCopy.addEventListener("click", function () {
  // sử dụng navigator.clipboard để copy text
  navigator.clipboard.writeText(prop__css.innerHTML);
  btnCopy.classList.remove("show");
  btnCopied.classList.add("show");
  setTimeout(() => {
    btnCopied.classList.remove("show");
  }, 3000);
});
