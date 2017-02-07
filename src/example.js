var app = angular.module('myApp', []);
app.controller('todoCtrl', function ($scope) {
	$scope.todoList = [];
	$scope.markAll = false;

	$scope.todoAdd = function () {
		if ($scope.todoInput == "") {
			return
		}
		$scope.todoList.push({
			todoText: $scope.todoInput,
			done: false
		});
		$scope.todoInput = "";
	};
	$scope.isTodo = function () {
		return $scope.todoList.length > 0;
	}

	$scope.remove = function () {
		var list = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(list, function (x) {
			if (!x.done) $scope.todoList.push(x);
		});
	};

	$scope.removeOne = function () {
		$scope.todoList.splice(this.$index, 1);
	};

	$scope.toggleMarkAll = function () {
		angular.forEach($scope.todoList, function (todo) {
			todo.done = $scope.markAll;
		});
	};

	$scope.remaining = function () {
		$scope.count = 0;
		angular.forEach($scope.todoList, function (todo) {
			$scope.count += todo.done ? 0 : 1;
		});
		return $scope.count;
	};


});