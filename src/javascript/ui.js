
const inputText = document.querySelector(".inputText");
inputText.addEventListener("click", focusbox, false);

function focusbox(event) {
    var target = event.target;

    const inputBox = document.querySelector(".inputBox");
    // inputBox.classList.add("focus");        

    // 인풋 영역 외 클릭 시
    if (target == event.currentTarget.querySelector('.inputText')) {
        inputBox.classList.add("focus");
    }
}


//  셀렉트 박스
const selectBoxElements = document.querySelectorAll(".select-wrap");

function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select-wrap");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isOptionElement = targetElement.classList.contains("option");

        if (isOptionElement) {
            selectOption(targetElement);
        }

        toggleSelectBox(selectBoxElement);
    });
});

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isSelect = targetElement.classList.contains("select-wrap") || targetElement.closest(".select-wrap");

    if (isSelect) {
        return;
    }

    const allSelectBoxElements = document.querySelectorAll(".select-wrap");

    allSelectBoxElements.forEach(boxElement => {
        boxElement.classList.remove("active");
    });
});
