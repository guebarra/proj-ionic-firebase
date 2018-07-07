import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {

  }

  public insert() {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, sala);
  }
 
  public update(key: string, sala: Sala) {
    return this.save(key, sala);
  }
 
  private save(key: string, sala: Sala) {
    return this.storage.set(key, sala);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }

}