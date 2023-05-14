const termsAndConditions = document.querySelector('#termsAndCondition')
const dummyCheckbox = document.querySelector('.dummyCheckbox')
const innerDummyCheckbox = document.querySelector('.dummyInnerCheckbox')
const formSubmitButton = document.querySelector('form > button')

termsAndConditions.addEventListener('input', () => {
    console.log('termsAndConditions', termsAndConditions.checked)
    if (!termsAndConditions.checked) {
        formSubmitButton.classList.add('disabled')
    } else {
        formSubmitButton.classList.remove('disabled')
    }
})