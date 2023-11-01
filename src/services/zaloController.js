import restFulAPI from '@/untils/resfulApi';

const reportStackedBar = async ({ projectCode, userCode, menuType, menuCode, dateBegin, dateEnd, keyword }) => {
    try {
        const response = await restFulAPI.post({
            endPoint: `/zalo/usp-bi-report-stacked-bar`,
            body: {
                projectCode,
                userCode,
                menuType,
                menuCode,
                dateBegin,
                dateEnd,
                keyword
            },
        });

        if (response) {
            return response;
        } else {
            return alert('đã xảy ra lỗi vui lòng thử lại')
        }
    } catch (e) {
        throw e;
    }
};

export default {
    reportStackedBar
}