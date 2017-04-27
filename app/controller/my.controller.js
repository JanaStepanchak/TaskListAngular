playDay.controller("myPlanDayCtrl", function () {
    var vm = this;
    vm.PlanDay = [
        {
            task: "Винести сміття"
            , checkbox: "false"
            , progress: "In Progres"
		}
		, {
            task: "Зробити ДЗ"
            , checkbox: "false"
            , progress: "In Progres"
		}
		, {
            task: "Подивитися фільм"
            , checkbox: "false"
            , progress: "In Progres"
		}
		, {
            task: "Почитати новини"
            , checkbox: "false"
            , progress: "In Progres"
		}
		, {
            task: "не забути про AngularJS"
            , checkbox: "false"
            , progress: "In Progres"
		}
 , ];
    //----------------------------------------------
    vm.addPlanDay = function () {
        vm.PlanDay.push({
            task: vm.newAddPlanDay
            , checkbox: "true"
            , progress: "In Progres"
        });
        vm.newAddPlanDay = "";
    }
    vm.delPlanDay = function (plan) {
        for (var i in vm.PlanDay) {
            if (vm.PlanDay[i].task == plan.task && plan.progress == "Done") {
                vm.PlanDay.splice(i, 1);
            }
        }
    };
    vm.checkPlanDay = function (plan) {
        for (var i in vm.PlanDay) {
            if (vm.PlanDay[i].task == plan.task) {
                if (plan.progress == "Done") {
                    plan.progress = "In Progres"
                }
                else {
                    plan.progress = "Done"
                }
                console.log(plan.progress);
            }
        }
    };
    vm.editPlanDay = function (plan) {
        vm.editPlan = function () {
            vm.editPlan = plan;
            plan.task = vm.textPlan;
            document.getElementsByTagName('form')[0].style.display = "none";
        };
        vm.textPlan = plan.task;
        console.log(plan.checkbox);
        if (plan.progress == "In Progres") {
            document.getElementsByTagName('form')[0].style.display = "block";
        }
    };
})