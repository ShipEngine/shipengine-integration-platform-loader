/**
 * The digital file format of a shipping label
 */
export enum LabelFormat {
  PDF = "pdf",
  ZPL = "zpl",
  PNG = "png"
}

/**
 * The dimensions of a shipping label
 */
export enum LabelSize {
  Inches4x6 = "4x6",
  Inches4x8 = "4x8",
  Letter = "letter",
}

/**
 * A class of delivery service
 */
export enum DeliveryServiceClass {
  Ground = "ground",
  OneDay = "one_day",
  OneDayEarly = "one_day_early",
  OneDayEarlyAm = "one_day_early_am",
  TwoDay = "two_day",
  TwoDayEarly = "two_day_early",
  ThreeDay = "three_day"
}

/**
 * A grade of delivery service
 */
export enum DeliveryServiceGrade {
  Economy = "economy",
  Expedited = "expedited",
  Overnight = "overnight",
  Standard = "standard"
}

/**
 * The service area that is covered by a delivery service
 */
export enum ServiceArea {
  Regional = "regional",
  Domestic = "domestic",
  Worldwide = "worldwide",
}

/**
 * A manifest type
 */
export enum ManifestType {
  Physical = "physical",
  Digital = "digital"
}

/**
 * Indicates which party is insuring a shipment
 */
export enum InsuranceProvider {
  ShipEngine = "shipengine",
  Carrier = "carrier",
  ThirdParty = "third_party",
}

/**
 * Indicates how a non-deliverable package should be handled
 */
export enum NonDeliveryBehavior {
  ReturnToSender = "return_to_sender",
  TreatAsAbandoned = "treat_as_abandoned",
}

/**
 * The reason the customer is cancelling their pickup request
 */
export enum PickupCancellationReason {
  NotReady = "not_ready",
  Price = "price",
  Schedule = "schedule",
  CarrierFailedPickup = "carrier_failed_pickup",
  Other = "other",
}