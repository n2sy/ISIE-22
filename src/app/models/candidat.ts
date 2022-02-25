export class Candidat {
  //   id: number;
  //   nom: string;
  //   prenom: string;

  constructor(
    public id: number,
    public prenom: string,
    public nom: string,

    public profession: string,
    public age: number,
    public avatar?: string
  ) {
    // this.id = id;
    // this.prenom = prenom;
    // this.nom = nom;
  }
}
