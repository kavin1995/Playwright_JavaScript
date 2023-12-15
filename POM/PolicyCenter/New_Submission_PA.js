import { expect } from "@playwright/test";
exports.New_Submission_PA =

class New_Submission_PA {

constructor(page){
    this.page = page;
    this.actions='#AccountFile\\:AccountFileMenuActions-btnInnerEl';
	this.new_Submission='#AccountFile\\:AccountFileMenuActions\\:AccountFileMenuActions_Create\\:AccountFileMenuActions_NewSubmission-itemEl';
	this.personal_Auto='#NewSubmission\\:NewSubmissionScreen\\:ProductOffersDV\\:ProductSelectionLV\\:6\\:addSubmission';
	this.offering_Selection='#SubmissionWizard\\:OfferingScreen\\:OfferingSelection-inputEl';
	this.next='#SubmissionWizard\\:Next-btnInnerEl';
	this.term_Type='#SubmissionWizard\\:LOBWizardStepGroup\\:SubmissionWizard_PolicyInfoScreen\\:SubmissionWizard_PolicyInfoDV\\:PolicyInfoInputSet\\:TermType-inputEl';
	this.add_Drvier='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PADriversScreen\\:PADriversPanelSet\\:DriversListDetailPanel\\:DriversLV_tb\\:AddDriver-btnInnerEl';
	this.newPerson_Driver='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PADriversScreen\\:PADriversPanelSet\\:DriversListDetailPanel\\:DriversLV_tb\\:AddDriver\\:0\\:ContactType-textEl';
	this.first_Name='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:PolicyContactRoleNameInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl';
	this.last_Name='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:PolicyContactRoleNameInputSet\\:GlobalPersonNameInputSet\\:LastName-inputEl';
	this.dateOfBirth='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:PolicyContactRoleNameInputSet\\:DateOfBirth-inputEl';
	this.addressOne='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:AddressLine1-inputEl';
	this.city ='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:AddressInputSet\\:globalAddressContainer\\:GlobalAddressInputSet\\:City-inputEl';
	this.address_Type='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:AddressType-inputEl';
	this.License_No='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:LicenseInputSet\\:LicenseNumber-inputEl';
	this.license_State_Driver='#NewPolicyDriverPopup\\:ContactDetailScreen\\:NewPolicyContactRoleDetailsCV\\:PolicyContactDetailsDV\\:LicenseInputSet\\:LicenseState-inputEl';
	this.ok_Driver='#NewPolicyDriverPopup\\:ContactDetailScreen\\:Update-btnInnerEl';
	this.roles='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PADriversScreen\\:PADriversPanelSet\\:DriversListDetailPanel\\:DriverDetailsCV\\:RolesCardTab-btnInnerEl';
	this.year_licensed='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PADriversScreen\\:PADriversPanelSet\\:DriversListDetailPanel\\:DriverDetailsCV\\:0\\:PolicyContactRolePanelSet\\:PolicyDriverInfoDV\\:yearlicensed-inputEl';
	this.noOfAccidents_Account="(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[1]//td[3]";
	this.noOfAccidents_Policy="(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[1]//td[2]";
	this.noOfVoilations_Account="(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[2]//td[3]";
	this.noOfVoilations_Policy="(//div[@id='SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:PADriversScreen:PADriversPanelSet:DriversListDetailPanel:DriverDetailsCV:0:PolicyContactRolePanelSet:2-body']//tr)[2]//td[2]";
	this.value0="(//li[contains(text(),'0') and not(contains(@id,\"ext-element\"))])[1]";
	this.create_Vehicle='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel_tb\\:Add-btnInnerEl';
	this.vehicle_Type='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel\\:VehiclesDetailsCV\\:PersonalAuto_VehicleDV\\:Type_DV-inputEl';
	this.VIN='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel\\:VehiclesDetailsCV\\:PersonalAuto_VehicleDV\\:Vin_DV-inputEl';
	this.license_State_Vehicle='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel\\:VehiclesDetailsCV\\:PersonalAuto_VehicleDV\\:LicenseState_DV-inputEl';
	this.cost_New='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel\\:VehiclesDetailsCV\\:PersonalAuto_VehicleDV\\:CostNew_DV-inputEl';
	this.add_Assign_Driver='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel\\:VehiclesDetailsCV\\:PersonalAuto_AssignDriversDV\\:DriverPctLV_tb\\:AddDriver-btnInnerEl';
	this.add_Driver_Assign='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PAVehiclesScreen\\:PAVehiclesPanelSet\\:VehiclesListDetailPanel\\:VehiclesDetailsCV\\:PersonalAuto_AssignDriversDV\\:DriverPctLV_tb\\:AddDriver\\:0\\:Driver-textEl';
	this.auto_Liability_Package='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:0\\:CoverageInputSet\\:CovPatternInputGroup\\:LiabilityTermInput-inputEl';
	this.medical_Limit='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:1\\:CoverageInputSet\\:CovPatternInputGroup\\:0\\:CovTermInputSet\\:OptionTermInput-inputEl';
	this.uninsured_Motorist_BI_Limits='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:2\\:CoverageInputSet\\:CovPatternInputGroup\\:0\\:CovTermInputSet\\:PackageTermInput-inputEl';
	this.uninsured_Motorist_Property_Damage_Limit='#SubmissionWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:3\\:CoverageInputSet\\:CovPatternInputGroup\\:0\\:CovTermInputSet\\:OptionTermInput-inputEl';
	this.quote='#SubmissionWizard\\:SubmissionWizard_PolicyReviewScreen\\:JobWizardToolbarButtonSet\\:QuoteOrReview-btnInnerEl';
	this.bind_Options='#SubmissionWizard\\:SubmissionWizard_PaymentScreen\\:JobWizardBillingToolbarButtonSet\\:BindOptions-btnInnerEl';
	this.issue_Policy='#SubmissionWizard\\:SubmissionWizard_PaymentScreen\\:JobWizardBillingToolbarButtonSet\\:BindOptions\\:BindAndIssue-textEl';
	this.bind_Only='#SubmissionWizard\\:SubmissionWizard_PaymentScreen\\:JobWizardBillingToolbarButtonSet\\:BindOptions\\:BindOnly-itemEl';
	this.warning_Message_Ok="//*[text()='OK']";
	this.tittle_Bar_Status='#JobComplete\\:JobCompleteScreen\\:ttlBar';
	this.policy_Number='#PolicyFile_Summary\\:Policy_SummaryScreen\\:Policy_Summary_PolicyDV\\:PolicyNumber-inputEl';
	this.view_Your_Policy='#JobComplete\\:JobCompleteScreen\\:JobCompleteDV\\:ViewPolicy-inputEl';
	this.product_Name='#PolicyFile_Summary\\:Policy_SummaryScreen\\:Policy_Summary_PolicyDV\\:Product-inputEl';
	this.effective_Date='#PolicyFile_Summary\\:Policy_SummaryScreen\\:Policy_Summary_DatesDV\\:PolicyPerEffDate-inputEl';
	this.expiry_Date='#PolicyFile_Summary\\:Policy_SummaryScreen\\:Policy_Summary_DatesDV\\:PolicyPerExpirDate-inputEl';
	this.policy_Transactions='#PolicyFile\\:MenuLinks\\:PolicyFile_PolicyFile_Jobs';
	this.policy_Current_Status="//div[@id='PolicyFile_Jobs/DetailsTitleCard']//table//table[1]//tr//td[5]//div";
}

async newSubmissionPA(){

    await this.page.locator(this.actions).click();
    await this.page.locator(this.new_Submission).click();
    await this.page.locator(this.personal_Auto).click();
    await this.page.locator(this.offering_Selection).fill('Standard Program');
    await this.page.locator(this.next).click();
	await this.page.locator(this.next).click();
    await this.page.locator(this.term_Type).fill('Annual');
	await this.page.locator(this.next).click();
	await this.page.locator(this.add_Drvier).click();
	await this.page.locator(this.newPerson_Driver).click();
    await this.page.locator(this.first_Name).fill('Test');
    await this.page.locator(this.last_Name).fill('Auto');
	await this.page.locator(this.dateOfBirth).fill('10/01/1983');
    await this.page.locator(this.addressOne).fill('1A');
    await this.page.locator(this.city).fill('Alys Beach');
    await this.page.locator(this.city).press('Enter');
  //  await this.page.locator(this.postcode).fill('');
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.address_Type).fill('Billing');
//	await this.page.locator(this.address_Type).press('Enter');
await this.page.waitForTimeout(1000);
	await this.page.locator(this.License_No).fill('5641');
	await this.page.waitForTimeout(1000);
	await this.page.locator(this.license_State_Driver).fill('Florida');
    await this.page.locator(this.ok_Driver).click();
    await this.page.locator(this.roles).click();
	await this.page.locator(this.year_licensed).fill('2000');
	await this.page.locator(this.noOfAccidents_Account).click();
	await this.page.locator(this.value0).click();
	await this.page.locator(this.noOfAccidents_Policy).click();
	await this.page.locator(this.value0).click();
	await this.page.locator(this.noOfVoilations_Account).click();
	await this.page.locator(this.value0).click();
	await this.page.locator(this.noOfVoilations_Policy).click();
	await this.page.locator(this.value0).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.create_Vehicle).click();
	await this.page.locator(this.vehicle_Type).fill('Passenger/Light Truck');
	await this.page.locator(this.VIN).fill('534');
	await this.page.locator(this.VIN).press('Tab');
	await this.page.locator(this.license_State_Vehicle).fill('Florida');
	await this.page.waitForTimeout(1000);
	await this.page.locator(this.cost_New).fill('1500');
	await this.page.locator(this.add_Assign_Driver).click();
	await this.page.locator(this.add_Driver_Assign).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.quote).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.bind_Options).click();
	await this.page.locator(this.issue_Policy).click();
	await this.page.locator(this.warning_Message_Ok).click();
	await this.page.waitForTimeout(2000);
	await this.page.screenshot({ path: 'PASubmission Bound.png' });
	await this.page.locator(this.view_Your_Policy).click();
	const policyNo = await this.page.locator(this.policy_Number).textContent();
	console.log("Policy Number is "+ policyNo);
	await this.page.locator(this.policy_Transactions).click();
	await expect (this.page.locator(this.policy_Current_Status)).toContainText('In Force'); 
	//await this.page.waitForTimeout(2000);
	//await this.page.screenshot({ path: 'AccNo Page.png' });
	

}




}