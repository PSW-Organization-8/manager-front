export class Order {
    constructor(
        public PharmacyName: string,
        public PharmacyId: number,
        public MedicationId: number,
        public MedicationName: string,
        public Quantity: number,
    ) { }
}