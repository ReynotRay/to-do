function Model() {
    this.listItems = [];
}

Model.prototype.returnData = function() {
    return this.listItems;
};

Model.prototype.addData = function(item) {
    this.listItems.push(item);
};

function View() {
}

View.prototype.append = function(data) {
    $('.list-todo').keyup(function(event) {
  if (event.keyCode == 13) {
    checkValue();
    console.log('shits');
  }
});
    $('.add').click(function() {
      checkValue();
});
    $('.todo-items').on('click', 'li', function() {
  $(this).css('text-decoration', 'line-through');
});
$('.todo-items').on('click', '#delete', function() {
  $(this).parent().remove();
});
};

function checkValue() {
  if ($('.list-todo').val() === "") {
    alert('Please Type an Item ');
  } else {
    $('.todo-items').append('<li class="item">' + $('.list-todo').val() + '<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>');
    resetValue();
  }
}
function resetValue() {
  $('.list-todo').val("");
}

View.prototype.value = function() {
    return $(".list-todo").val();
};

View.prototype.getItems = function() {
    var ajax = $.ajax('/items', {
        type: 'GET',
        dataType: 'json'
    });
    ajax.done(this.listItems.bind(this));
};
View.prototype.addItem = function(name) {
    var item = {'.item': name};
    var ajax = $.ajax('/items', {
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json'
    });
    ajax.done(this.listitems.bind(this));
};
View.prototype.deleteItem = function(id) {
    var ajax = $.ajax('/items/' + id, {
        type: 'DELETE',
        dataType: 'json'
    });
    ajax.done(this.getItems.bind(this));
};
View.prototype.editItem = function(id, name) {
    var item = {'.item': name, 'id': id};
    var ajax = $.ajax('/items/' + id, {
        type: 'PUT',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json'
    });
    ajax.done(this.getItems.bind(this));
};

function Controller(view, model) {
    this.view = view;
    this.model = model;
}

var model = new Model();
var view = new View();
var controller = new Controller(view, model);

view.append();