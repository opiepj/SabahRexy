import {ZipValidator} from './address-form';

export function zipValidator(zip): ZipValidator {
  
  let valid: boolean = /^\d{5}$/.test(zip.value);
  
  if (valid) {
    return null;
  }
  
  return {invalidZip: true};
}
