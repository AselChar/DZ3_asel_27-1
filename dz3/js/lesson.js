// PhoneCheck

const phone_input = document.querySelector('#phone_input')
const phone_button = document.querySelector('#phone_button')
const phone_result = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phone_input.value = '+996 '

phone_button.addEventListener('click',() => {
    if (regExp.test(phone_input.value)) {
        phone_result.innerHTML = 'Ok'
        phone_result.style.color = 'green'
    } else{
        phone_result.innerHTML = 'not'
        phone_result.style.color = 'red'
    }

})

// TAB

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((element) => {
        element.style.display = 'none'
    })
    tabs.forEach((element) => {
            element.classList.remove('tab_content_item_active')
        }
    )
}

const  showTabContent = (index = 0) =>{
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')

}


hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const targetElement = event.target
    if(targetElement.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

let num = 0


const autoTabSlider = (i = 0) => {
    setInterval(() =>{
        i++
        if (i > tabContent.length -1){
            i = 0
        }
        hideTabContent()
        showTabContent(i)

    }, 3000)
}

autoTabSlider(num)