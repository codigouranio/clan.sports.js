import Component from './component';
import { getData, setData } from './data';
import PhoneInput from './phoneInput';
import RequestCodeButton from './requestCodeButton';

class RequestCode extends Component {
  constructor(id) {
    super(id);
    this.requestCodeButton = new RequestCodeButton('#request_code');
    this.requestCodeButton.click = async () => {
      await this.request(getData()?.form || {});
    };
    this.phoneInput = new PhoneInput('#phone');
  }

  async request(form) {
    const { phoneNumber, isValidNumberPrecise } = form;
    if (!phoneNumber || !isValidNumberPrecise) {
      return;
    }
    console.log('request', phoneNumber);
    const response = await fetch('/api/requestCode', {
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

  render() {
    const { requestCode } = getData();
    if (requestCode) {
      console.log([requestCode, this.obj]);
      this.hide();
      this.obj.innerHTML = `<p>Request code: ${
        getData()?.requestCode?.phoneNumber
      }</p>`;
    }
  }
}

export default RequestCode;
