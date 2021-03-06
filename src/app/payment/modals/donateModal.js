/* @ngInject */
function donateModal($rootScope, pmModal) {
    return pmModal({
        controllerAs: 'ctrl',
        templateUrl: require('../../../templates/modals/donate.tpl.html'),
        /* @ngInject */
        controller: function(params) {
            this.typeOfModal = params.type;
            this.close = params.close;

            const unsubscribe = $rootScope.$on('payments', (e, { type }) => {
                if (/^(donation|topUp)\.request\.success/.test(type)) {
                    params.close();
                }
            });

            this.$onDestroy = () => unsubscribe();
        }
    });
}
export default donateModal;
