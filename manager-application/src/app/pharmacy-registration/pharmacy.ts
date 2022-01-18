export class Pharmacy {
    constructor(
        public Name: string,
        public ApiKey: string,
        public Url: string,
        public Port: string,
        public PortNum: number,
        public ComunicateWithGrpc: boolean,
        public ComunicateWithSftp: boolean,
        public EmailAddress: string
    ) { }
}