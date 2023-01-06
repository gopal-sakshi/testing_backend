async function updateEmaildata() {
    try {
        let mailIDs = ["R2@rcvaramfpo.com", "R4@rcvaramfpo.com"];
        let failedMobData = []; let failedProfData = []; let failedUpdating = [];
        for (let id of mailIDs) {
            log.info("login", id);
            let mobileNo; let maildata; let profileData;
            try {
                maildata = await dynamo.getDataJson(id.toLowerCase());
                mobileNo = await dynamo.getDataJson(maildata.mobileNumber);
            } catch (error) {
                failedMobData.push(id);
            }
            try {
                profileData = await dynamo.getDataJson(mobileNo.profileKey);
            } catch (error) {
                failedProfData.push(id)
            }
            try {
                mobileNo.verifyUserName = 'VERIFY_SUCCESS';
                mobileNo.isVerified = true
                await dynamo.putData(maildata.mobileNumber, mobileNo)
            } catch (error) {
                failedUpdating.push(id)
            }
        }
        log.info("failed in mobiledata", failedMobData);
        log.info("failed in profiledata", failedProfData)
        // log.info("failed in updating data",failedUpdating);
    } catch (error) {
        log.info("Error while updating details", error);
    }
}
updateEmaildata();