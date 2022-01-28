export class News {
    constructor(
        public id: Int32Array,
        public idFromPharmacy: Int32Array,
        public title: string,
        public text: string,
        public durationStart: Date,
        public durationEnd: Date,
        public posted: boolean,
    ) { }
}