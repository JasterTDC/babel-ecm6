
import Account from 'account.js';
import sum from 'functions.js'

class App{

  constructor( container ){

    this._container = document.getElementById( container );
    this._account   = new Account( container, 10 );
    this._value     = 10;
  }

  getContainer(){
    return this._container;
  }

  getValue(){
    return this._account.getValue() + 10;
  }

  getSum(){
    return sum( 10, 20 );
  }
}
