export class Notification {
    constructor(
        public id: Int32Array,
        public title: string,
        public read: boolean,
        public contentNotification: string,
        public fileName: string
    ) { }
}