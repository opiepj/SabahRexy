import {Http, Response, Headers, Jsonp, URLSearchParams} from '@angular/http';
import {Observable, Observer} from 'rxjs';
import {Product} from 'app/src/core/interfaces/product.interface';
import {Injectable} from '@angular/core';
import {StreamEmitter} from './stream-emitter.service';
let AWS = require('aws-sdk');
let awsIot = require('aws-iot-device-sdk');

declare const fetch: any;

@Injectable()
export class AwsSerivce {
  
  public mqttClient: any;
  
  constructor(private _streamEmitter: StreamEmitter) {
    
    this.mqttClient = this.listen();
  }
  
  public connect() {
    this.mqttClient.on('connect', (res) => {
      console.log(res);
      this.mqttClient.subscribe('topic/machines');
      this.mqttClient.subscribe('topic/orders');
    });
    this.mqttClient.on('message', (topic, payload) => {
      console.log('topic', topic);
      console.log('payload', payload.toString());
      let product: Product = JSON.parse(payload.toString());
      this._streamEmitter.emit('machineUpdate', product);
    });
  };
  
  private listen() {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:c5be31ba-400b-4c27-b609-1d9e661374f8'
    });
    
    const mqttClient = awsIot.device({
      region: 'us-east-1',
      clientId: `client_${Number(Math.random() * 10000 + 8).toString()}`,
      protocol: 'wss',
      maximumReconnectTimeMs: 8000,
      debug: true,
      accessKeyId: '',
      secretKey: '',
      sessionToken: ''
    });
    
    let cognitoIdentity = new AWS.CognitoIdentity();
    AWS.config.credentials.get((err) => {
      
      if (err) {
        console.error('No Credentials ->', err);
      }
      
      let params = {
        IdentityId: AWS.config.credentials.identityId
      };
      
      cognitoIdentity.getCredentialsForIdentity(params, (err, data) => {
        if (err) {
          console.error('No CognitoIdentityCredentials', err);
        }
        
        mqttClient.updateWebSocketCredentials(
          data.Credentials.AccessKeyId,
          data.Credentials.SecretKey,
          data.Credentials.SessionToken
        );
      });
    });
    
    return mqttClient;
  }
}


export interface MachineRes {
  machines: Array<Product>;
}
