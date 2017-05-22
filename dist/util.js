import { XuntongJSBridge } from "./qing";
import { Error } from "./error";
class JsbUtil {
    call(methname, config) {
        return new Promise(function (resolve, reject) {
            XuntongJSBridge.call(methname, config, function (result) {
                if (result.success === "true" || result.success === true)
                    resolve(result.data);
                else if (result.success === "false" || result.success === false)
                    reject(new Error(result));
            });
        });
    }
    getPersonInfo() {
        return this.call('getPersonInfo', {});
    }
    getNetworkType() {
        return this.call('getNetworkType', {});
    }
    gotoApp(config) {
        return this.call('gotoApp', config);
    }
    sinin() {
        return this.call('localFunction', { 'name': 'signin' });
    }
    createChat() {
        return this.call('localFunction', { 'name': 'createChat' });
    }
    selectFile(selectType) {
        if (selectType)
            return this.call('selectFile', {
                selectType: selectType
            });
        else
            return this.call('selectFile', {});
    }
    showFile(config) {
        return this.call('selectFile', config);
    }
    selectPic() {
        return this.call('selectPic', {});
    }
    scanQRCode(needResult, scanType) {
        return this.call('scanQRCode', {
            needResult: needResult,
            scanType: scanType
        });
    }
    selectOrg() {
        return this.call('selectOrg', {});
    }
    selectDepts() {
        return this.call('selectDepts', {});
    }
    selectPersons(isMulti, pType) {
        return this.call('selectPersons', { 'isMulti': isMulti, 'pType': pType });
    }
    selectPerson(pType) {
        return this.call('selectPerson', { 'pType': pType });
    }
    getCurrentPosition() {
        return this.call('getCurrentPosition', {});
    }
    getAdminOpenId() {
        return this.call('getAdminOpenId', {});
    }
    socialShare(shareWay, shareType, shareContent) {
        return this.call('getAdminOpenId', { shareWay: shareWay, shareType: shareType, shareContent: shareContent });
    }
    createPop(config) {
        return this.call('createPop', config);
    }
    defback() {
        return new Promise(function (resolve, reject) {
            XuntongJSBridge.call('defback', {}, function () {
                resolve();
            });
        });
    }
    previewImage(current, urls) {
        return this.call('previewImage', { current: current, urls: urls });
    }
    getMessageById(msgId) {
        return this.call('getMessageById', { 'msgId': msgId });
    }
    openInBrowser(url) {
        return this.call('openInBrowser', { 'url': url });
    }
    downloadFile(fileId, fileName, fileSize) {
        return this.call('downloadFile', { 'fileId': fileId, 'fileName': fileName, 'fileSize': fileSize });
    }
}
export { XuntongJSBridge, JsbUtil };
