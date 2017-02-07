describe('Todo', function () {

	beforeEach(module('myApp'));

	var $controller;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));
	describe('Todolist', function () {
		it('should add a todo', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', {
				$scope: $scope
			});

			$scope.todoInput = "Test Todo";
			$scope.todoAdd();

			expect($scope.todoList[0].todoText).toBe("Test Todo");
		});

		it('should remove a todo', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', {
				$scope: $scope
			});

			$scope.todoInput = "Test Todo";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo2";
			$scope.todoAdd();

			expect($scope.todoList.length).toBe(2);

			$scope.todoList[0].done = true;
			$scope.todoList[1].done = true;
			$scope.remove();

			expect($scope.todoList.length).toBe(0);


		});
		it('should remove marked todos', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', {
				$scope: $scope
			});

			$scope.todoInput = "Test Todo";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo2";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo3";
			$scope.todoAdd();

			$scope.todoList[0].done = true;
			$scope.todoList[1].done = false;
			$scope.todoList[2].done = true;

			$scope.remove();
			expect($scope.todoList.length).toBe(1);

		});
		it('should remove one todo', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', {
				$scope: $scope
			});

			$scope.todoInput = "Test Todo";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo2";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo3";
			$scope.todoAdd();

			$scope.todoList[0].done = true;
			$scope.todoList[1].done = false;
			$scope.todoList[2].done = true;

			$scope.removeOne();
			expect($scope.todoList.length).toBe(2);

		});
		it('should prevent empty input', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', {
				$scope: $scope
			});

			$scope.todoInput = "";
			$scope.todoAdd();

			expect($scope.todoList.length).toBe(0);
		});
		it('should count remaining todos', function () {
			var $scope = {};
			var controller = $controller('todoCtrl', {
				$scope: $scope
			});

			$scope.todoInput = "Test Todo";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo2";
			$scope.todoAdd();

			$scope.todoInput = "Test Todo3";
			$scope.todoAdd();

			$scope.todoList[0].done = true;
			$scope.todoList[1].done = false;
			$scope.todoList[2].done = true;

			$scope.remaining();
			expect($scope.count).toBe(1);


		});
	});

});