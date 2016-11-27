import {Character} from './character';

export class Document {
  
  private _characters: Array<Character>;
  private _currentChar: Character;
  private _firstSelectedCharacter: number;
  
  constructor() {
    this._characters = [];
    this._firstSelectedCharacter = -1;
    this._currentChar = new Character(-1);
    this._characters.push(this._currentChar);
    this._characters[0].isCurrent = true;
  }
  
  public clearSelection(e) {
    this._firstSelectedCharacter = -1;
    if (e) {
      this._firstSelectedCharacter = this._characters.indexOf(e.character);
    }
    this._characters.forEach(c => c.isSelected = false);
  }
  
  public processInput(character, operation) {
    if (operation === 'modify') {
      let index = this._characters.indexOf(this._currentChar);
      
      if (index < 0) {
        index = this._characters.length - 1;
      }
      this.edit(character, index + 1);
    }
    if (operation === 'select') {
      this.placeCursor(character);
    }
    if (operation === 'range') {
      this.selectCharacter(character);
    }
  }
  
  public get characters(): Array<Character> {
    return this._characters;
  }
  
  private deselectPreviousCharacter() {
    if (this._currentChar) {
      let index = this._characters.indexOf(this._currentChar);
      this._characters[index].isCurrent = false;
    }
  }
  
  private edit(character, index) {
    
    if (character.deleteChar) {
      
      let deleteIndex = this._characters.indexOf(this._currentChar);
      
      if (deleteIndex >= 1) {
        this._characters.splice(deleteIndex, 1);
        
        if (this._characters.length > 1) {
          this._characters[deleteIndex - 1].isCurrent = true;
          this._currentChar = this._characters[deleteIndex - 1];
        }
        else if (this._characters.length === 1) {
          this._characters[0].isCurrent = true;
          this._currentChar = this._characters[0];
        }
      }
    }
    else {
      
      this._characters.splice(index, 0, character);
      
      if (character.lineBreak) {
        this.deselectPreviousCharacter();
        let placeHolder = new Character(-1);
        this._characters.splice(index + 1, 0, placeHolder);
        this.placeCursor(placeHolder);
      }
      else {
        this.placeCursor(character);
      }
    }
  }
  
  private placeCursor(character) {
    this.deselectPreviousCharacter();
    
    let index = this._characters.indexOf(character);
    this._characters[index].isCurrent = true;
    
    this._currentChar = character;
  }
  
  private selectCharacter(character) {
    let index = this._characters.indexOf(character);
    for (let i = this._firstSelectedCharacter; i <= index; i++) {
      this._characters[i].isSelected = true;
    }
  }
  
}
