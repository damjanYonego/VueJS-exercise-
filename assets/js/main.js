Vue.component('amount-delimiter', {});

new Vue({
    el: '#amount-holder',
    data: {
        convertedAmount: '',
        displayWarning: false
    },
    methods: {
        /*
         ** function name: update
         ** function arguments: e(event from the input field from where the value is taken)
         ** function description: This function is called when input field is changed
         ** Author: Nikola Damjanovski (Damjan)
         */
        update: function (e) {
            if (isNaN(e.target.value)) {
                this.displayWarning = true;
                return false;
            } else {
                this.convertedAmount = e.target.value;
                this.displayWarning = false;
                this.convertAmount();
            }
        },
        /*
         ** function name: convertAmount
         ** function arguments: /
         ** function description: converting the value in to price amount
         ** Author: Nikola Damjanovski (Damjan)
         */
        convertAmount: function () {
            this.convertedAmount = Intl.NumberFormat('nl-NL').format(this.convertedAmount);
        }
    },
    template: '<div><label for="amount">Please add value: </label>' +
    '<input type="text" @input="update" id="amount">' +
    '<div class="row convertedAmount"><span>{{convertedAmount}}</span></div>' +
    '<div v-if="displayWarning" class="alert alert-danger"> <strong>Warning!</strong> Please add number!</div></div>'
});
