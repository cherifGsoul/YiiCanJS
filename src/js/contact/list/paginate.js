define(['can/util/string', 'can/map'], function(can) {
    return can.Map.extend('Paginate', {
        count: Infinity,
        offset: 0,
        limit: 5,
        next: function() {
            this.attr('offset', this.offset + this.limit);
        },
        prev: function() {
            this.attr('offset', this.offset - this.limit)
        },
        setOffset: function(newOffset) {
            return newOffset < 0 ?
                0 :
                Math.min(newOffset, !isNaN(this.count) ?
                    this.count :
                    Infinity)
        },
        setCount: function(newCount, success, error) {
            return newCount < 0 ? 0 : newCount;
        },
        canNext: function() {
            return this.attr('offset') < this.attr('count') -
                this.attr('limit');
        },
        canPrev: function() {
            return this.attr('offset') > 0;
        },
        page: function(newVal) {
            if (newVal === undefined) {
                return Math.floor(this.attr('offset') / this.attr('limit')) + 1;
            } else {
                this.attr('offset', (parseInt(newVal) - 1) * this.attr('limit'));
            }
        },
        pageCount: function() {
            var count = Math.ceil((this.attr('count')) / (this.attr('limit')));
            return count;
        },
        goTo: function(page) {
            if (this.page() == page)
                return;

            this.page(page);
        },
        pages: function() {
            var pages = [],

                pageRange = this.pageRange();

            for (var i = pageRange.beginPage; i <= pageRange.endPage; i++) {
                pages.push(i);
            }
            return pages;
        },
        pageRange: function() {

            var page = this.page(),
                count = this.pageCount(),
                maxLinks = 5,
                beginPage = Math.ceil(Math.max(1, page - maxLinks / 2)),

                endPage = beginPage + maxLinks - 1;

            if (endPage >= count) {
                endPage = count;
                beginPage = Math.ceil(Math.max(1, endPage - (maxLinks - 1)));
            }
            return {
                beginPage: beginPage,
                endPage: endPage
            };
        }
    });
});