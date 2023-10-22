export class Profile {
    constructor( name, year, choreo, africa, hobby, resCollege, dining, nationality, place, state, qualities, relationship,  preference, major) {
      this.name = name;
      this.year = year;
      this.choreo = choreo;
      this.africa = africa;
      this.hobby = hobby;
      this.resCollege = resCollege;
      this.dining = dining;
      this.nationality = nationality;
      this.place = place;
      this.state = state;
      this.qualities = qualities;
      this.relationship = relationship;
      this.preference = preference;
      this.major = major;

    }
  
    isValid() {
      return this.id && this.name && this.surname && this.country;
    }
  
    toJson() {
      return {
        name: this.name,
        year: this.year,
        choreo: this.choreo,
        africa: this.africa,
        hobby: this.hobby,
        resCollege: this.resCollege,
        dining: this.dining,
        nationality: this.nationality,
        place: this.place,
        state: this.state,
        qualities: this.qualities,
        relationship: this.relationship,
        preference: this.preference,
        major: this.major


      };
    }
  
    static fromFirebase(doc) {
      const data = doc.data();
  
      return new Profile(doc.id, data.name, data.surname, data.country);
    }
  }