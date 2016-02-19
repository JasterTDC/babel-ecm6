
class Account {
  constructor( container, value ){
    this._container = document.getElementById( container );
    this._value     = value;
  }

  setValue(newValue){
    this._value = newValue;
  }

  getValue(){
    return this._value;
  }
}
