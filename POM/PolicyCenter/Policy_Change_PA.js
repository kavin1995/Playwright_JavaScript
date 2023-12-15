import { expect } from "@playwright/test";
exports.Policy_Change_PA =

class Policy_Change_PA {

constructor(page){
    this.page = page;
    this.actions='#PolicyFile\\:PolicyFileMenuActions-btnInnerEl';
	this.change_Policy='#PolicyFile\\:PolicyFileMenuActions\\:PolicyFileMenuActions_NewWorkOrder\\:PolicyFileMenuActions_ChangePolicy-itemEl';
	this.next_policyChage='#StartPolicyChange\\:StartPolicyChangeScreen\\:NewPolicyChange-btnInnerEl';
	this.offering_Selection='#PolicyChangeWizard\\:OfferingScreen\\:OfferingSelection-inputEl';
	this.next='#PolicyChangeWizard\\:Next-btnInnerEl';
	this.term_Type='#PolicyChangeWizard\\:LOBWizardStepGroup\\:PolicyChangeWizard_PolicyInfoScreen\\:PolicyChangeWizard_PolicyInfoDV\\:PolicyInfoInputSet\\:TermType-inputEl';	
	this.auto_Libility='#PolicyChangeWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:0\\:CoverageInputSet\\:CovPatternInputGroup\\:LiabilityTermInput-inputEl';   
    this.first_Name='#PolicyChangeWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PADriversScreen\\:PADriversPanelSet\\:DriversListDetailPanel\\:DriverDetailsCV\\:PolicyContactDetailsDV\\:PolicyContactRoleNameInputSet\\:GlobalPersonNameInputSet\\:FirstName-inputEl';
	this.paCoverage='#PolicyChangeWizard\\:LOBWizardStepGroup\\:PALine';
    this.property_Damage='#PolicyChangeWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:3\\:CoverageInputSet\\:CovPatternInputGroup\\:0\\:CovTermInputSet\\:OptionTermInput-inputEl';
	this.medical_Limit='#PolicyChangeWizard\\:LOBWizardStepGroup\\:LineWizardStepSet\\:PersonalAutoScreen\\:PersonalAuto_AllVehicleCoveragesDV\\:PALiabCategoryIterator\\:1\\:CoverageInputSet\\:CovPatternInputGroup\\:0\\:CovTermInputSet\\:OptionTermInput-inputEl';
	this.quote='#PolicyChangeWizard\\:PolicyChangeWizard_DifferencesScreen\\:JobWizardToolbarButtonSet\\:QuoteOrReview-btnInnerEl';	
	this.issue_Policy='#PolicyChangeWizard\\:PolicyChangeWizard_PaymentScreen\\:JobWizardBillingToolbarButtonSet\\:BindPolicyChange-btnInnerEl';	
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

async changePolicy(){

    await this.page.locator(this.actions).click();
    await this.page.locator(this.change_Policy).click();
    await this.page.locator(this.next_policyChage).click();
	await this.page.locator(this.next).click();
    await this.page.locator(this.term_Type).fill('6 months');
    await this.page.waitForTimeout(1000);
	await this.page.locator(this.next).click();	
    //await this.page.waitForTimeout(5000);
    //await this.page.locator(this.first_Name).fill('Auto');
    await this.page.locator(this.next).hover();
	await this.page.locator(this.next).click();
    await this.page.waitForTimeout(1000);
	await this.page.locator(this.next).click();
    await this.page.locator(this.auto_Libility).fill('500K CSL');
    //await this.page.waitForTimeout(500);
    await this.page.locator(this.medical_Limit).fill('10,000');
    //await this.page.waitForTimeout(500);
    await this.page.locator(this.property_Damage).fill('50,000');
    //await this.page.waitForTimeout(500);
	await this.page.locator(this.next).click();
    await this.page.locator(this.next).click();
	await this.page.locator(this.quote).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.next).click();
	await this.page.locator(this.issue_Policy).click();
	await this.page.locator(this.warning_Message_Ok).click();
	//await this.page.waitForTimeout(2000);
	await this.page.screenshot({ path: 'Screenshots/Policy Change.png' });
	await this.page.locator(this.view_Your_Policy).click();
	// const policyNo = await this.page.locator(this.policy_Number).textContent();
	// console.log("Policy Number is "+ policyNo);
	await this.page.locator(this.policy_Transactions).click();
	await expect (this.page.locator(this.policy_Current_Status)).toContainText('In Force'); 
	//await this.page.waitForTimeout(2000);
	//await this.page.screenshot({ path: 'AccNo Page.png' });
	

}




}