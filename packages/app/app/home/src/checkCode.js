import CheckCodeButton from './checkCodeButton';
import Component from './component';
import { getData } from './data';

class CheckCode extends Component {
  constructor(id) {
    super(id);

    this.checkCodeButton = new CheckCodeButton('#check_code_button');
    this.checkCodeButton.click = async () => {
      alert('hola');
      window.location.href = '/app';
    };

    // Get all input elements with class "code-input"
    this.codeInputs = document.querySelectorAll('.code-input');
    // Add input event listener to each input element
    this.codeInputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        // Get the entered value
        var enteredValue = event.target.value.trim();
        // If the entered value is a number and the length of the value is 1
        if (!isNaN(enteredValue) && enteredValue.length === 1) {
          // If there's a next input element, move focus to it
          if (index < this.codeInputs.length - 1) {
            var nextInput = this.codeInputs[index + 1];
            nextInput.focus();
            // Select the content of the next input box
            nextInput.select();
          }
        }
      });
    });
  }

  focus() {
    this.codeInputs.length > 0 && this.codeInputs[0].focus();
  }

  render() {
    const { requestCode } = getData();
    if (requestCode) {
      this.show();
    }
  }

  async request(form) {
    const { phoneNumber, isValidNumberPrecise } = form;
    if (!phoneNumber || !isValidNumberPrecise) {
      return;
    }
    console.log('request', phoneNumber);
    const response = await fetch('/api/checkCode', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        phoneNumber,
      }),
    });
    const resp = await response.json();
    setData({
      ...getData(),
      ...{
        requestCode: resp,
      },
    });
    return resp;
  }
}

export default CheckCode;
