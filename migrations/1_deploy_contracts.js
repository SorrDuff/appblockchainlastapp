const MyContractBlockchain = artifacts.require("MyContractBlockchain");
const Classroom = artifacts.require("Classroom");

module.exports = function (deployer) {
    deployer.deploy(MyContractBlockchain)
        .then(() => deployer.deploy(Classroom));
};
