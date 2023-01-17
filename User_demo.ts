import document_demo from "./document_demo";
import {AccessLevels} from "./accessLevels";
export default class User_demo{
  private id: number;
  private username : string;
  private documents: document_demo [];
  public static totalUser: number;
  constructor(name: string) {
    this.username = name;
    this.id = ++User_demo.totalUser;
    this.documents = [];
  }
  public getId() { return this.id; }
  public createDocument(docName: string) {
    const doc : document_demo = new document_demo(docName, this.id);
  }
  public grantEditAccess(userId:number, documentId:number){
    for(const doc of this.documents){
      if(doc.getId() == documentId){
        doc.setUserIdAccess(userId, AccessLevels.EDITOR);
      }
    }
  }

  public grantReadAccess(userId:number, documentId:number){
    for(const doc of this.documents){
      if(doc.getId() == documentId){
        doc.setUserIdAccess(userId, AccessLevels.READER);
      }
    }
  }
}
User_demo.totalUser =0;