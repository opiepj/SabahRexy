import {Gulpclass, Task, SequenceTask} from 'gulpclass/Decorators';

// Globals
declare let __projectRoot: string;

let path = require('path');
let opn = require('opn');
let gulp = require('gulp');
let spawn = require('child_process').spawn;

@Gulpclass()
export class Test {
  
  private _configPath: string = path.resolve(__projectRoot, 'config/protractor.conf.js');
  
  /**
   * Run Full Jasmine tests using Karama as the test runner
   * @param cb
   */
  @Task('protractor:install')
  public protractorInstall(cb: Function) {
    return spawn(this.getProtractorBinary('webdriver-manager'), ['update'], {
      stdio: 'inherit'
    }).once('close', cb);
    
  }
  
  /**
   * Run Full Jasmine tests using Karma as the test runner
   * @param cb
   */
  @Task('protractor:run')
  public protractorDev(cb: Function) {
    let argv = process.argv.slice(3); // forward args to protractor
    let file = `${this._configPath}`;
    argv.push(file);
    spawn(this.getProtractorBinary('protractor'), argv, {
      stdio: 'inherit'
    }).once('close', cb);
  }
  
  @SequenceTask('protractor')
  public protractor() {
    return ['protractor:install', 'protractor:run'];
  }
  
  private getProtractorBinary(binaryName) {
    let winExt = /^win/.test(process.platform) ? '.cmd' : '';
    let pkgPath = require.resolve('protractor');
    let protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(protractorDir, '/' + binaryName + winExt);
  }
  
}
