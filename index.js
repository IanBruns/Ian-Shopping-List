function main() {
    $('#js-shopping-list-form').on('submit', e => {
        //creating a new shopping item when ever we hit submit on the
        //top button

        e.preventDefault();

        const newItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    })

    $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
        //If the "check" is clicked, cross out the item's name as it as been collected
        e.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })

    $('.shopping-list').on('click', '.shopping-item-delete', function (e) {
        //If "delete" is clicked, remove the entire item from the list as it is no longer needed
        e.preventDefault();
        $(this).closest('li').remove();
    })
}

main();