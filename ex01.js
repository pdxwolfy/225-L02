const assert = require('../assert.js');

// eslint-disable-next-line max-statements
(function main() {
  'use strict';

  const invoices = {
    paid:   [],
    unpaid: [],

    add: function(clientName, amountOwed) {
      this.unpaid.push({
        amount: amountOwed,
        name:   clientName,
      });
    },

    payInvoice: function(clientName) {
      const remaining = [];

      this.unpaid.forEach(function partition(invoice) {
        if (invoice.name === clientName) {
          this.paid.push(invoice);
        } else {
          remaining.push(invoice);
        }
      }, this);

      this.unpaid = remaining;
    },

    sum: function(array) {
      function accumulate(accumulator, invoice) {
        return accumulator + invoice.amount;
      }

      return array.reduce(accumulate, 0.0);
    },

    totalDue: function() {
      return this.sum(this.unpaid);
    },

    totalPaid: function() {
      return this.sum(this.paid);
    },
  };

  /* eslint-disable no-magic-numbers */
  assert.show(invoices);
  invoices.add('Due North Development', 250);
  invoices.add('Moonbeam Interactive', 187.50);
  invoices.add('Slough Digital', 300);
  assert.show(invoices);

  assert.equal('x01', invoices.totalDue(), 737.50);

  invoices.payInvoice('Due North Development');
  invoices.payInvoice('Slough Digital');
  assert.show(invoices);

  assert.equal('x02', invoices.totalDue(), 187.50);
  assert.equal('x03', invoices.totalPaid(), 550);

  // All done
  assert.done();
}());
