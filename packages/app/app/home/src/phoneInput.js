import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/utils.js';

import Component from './component';
import { getData, setData } from './data';

class PhoneInput extends Component {
  constructor(id) {
    super(id);

    const op = () => {
      setData({
        ...getData(),
        ...{
          form: {
            ...getData().form,
            phoneNumber: this.iti.getNumber(),
            isValidNumber: this.iti.isValidNumber(),
            isValidNumberPrecise: this.iti.isValidNumberPrecise(),
          },
        },
      });
    };

    this.obj.addEventListener('change', op);
    this.obj.addEventListener('keydown', op);
    this.obj.addEventListener('paste', op);
    this.obj.addEventListener('input', op);

    this.iti = intlTelInput(this.obj, {
      preferredCountries: ['us', 'ca'],
      separateDialCode: true,
      utilsScript: 'intl-tel-input/build/js/utils.js',
    });
  }

  render() {}
}

export default PhoneInput;
