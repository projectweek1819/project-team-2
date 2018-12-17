function onMouseDown(state, args){
    return state + 1;
}

function onMouseDown2(state, args) {
    return {count: state.count + 1};
}

function counter3() {
    function onMouseDown(state, args) {
        return {count: state.count + 1}
    }

    return { controller: { onMouseDown } };
}

function counter4() {
    function onMouseDown(state, args) {
        return {count: state.count + 1}
    }

    function onKeyDown(state, args){
        return {count: 0};
    }

    return { controller: { onMouseDown, onKeyDown }};
}

function counter5() {
    function onMouseDown(state, args) {
        if (args.shift === true){
            if (state.count === 0){
                return {count: state.count};
            }
            return {count: state.count - 1};
        }
        return {count: state.count + 1};
    }

    function onKeyDown(state, args){
        if (args.key === "ArrowUp" || args.key === " "){
            return {count: state.count + 1};
        }
        else if (args.key === "ArrowDown"){
            if (state.count === 0){
                return {count: 0};
            }
            return {count: state.count - 1};
        }
        else if (args.key === "0"){
            return {count: 0};
        }
        else {
            return {count: state.count};
        }
    }

    return { controller: { onMouseDown, onKeyDown }};
}

function counter6() {
    function increment(state) {
        return {count: state.count + 1};
    }

    function decrement(state) {
        if (state.count === 0){
            return {count: 0};
        }
        return {count: state.count - 1};
    }

    function reset(state) {
        return {count: 0};
    }

    function onMouseDown(state, args) {
        if (args.shift === true){
            return model.decrement(state);
        }
        return model.increment(state);
    }

    function onKeyDown(state, args) {
        if (args.key === "ArrowUp" || args.key === " "){
            return model.increment(state);
        }
        else if (args.key === "ArrowDown"){
            return model.decrement(state);
        }
        else if (args.key === "0"){
            return model.reset(state);
        }
        else {
            return {count: state.count};
        }
    }

    const controller = { onMouseDown, onKeyDown };
    const model = { increment, decrement, reset };
    return { controller, model };
}

function counter7() {
    function add(state, amount){
        if ((state.count + amount) < 0){
            return {count: 0};
        }
        return {count: state.count + amount};
    }

    function reset(state) {
        return {count: 0};
    }

    function onMouseDown(state, args) {
        if (args.shift){
            if (args.ctrl){
                return model.add(state, -5);
            }
            return model.add(state, -1);
        }
        if (args.ctrl){
            return model.add(state, 5);
        }

        return model.add(state, 1);
    }

    function onKeyDown(state, args) {
        if (args.key === "ArrowUp" || args.key === " "){
            if (args.ctrl){
                return model.add(state, 5);
            }
            return model.add(state, 1);
        }
        else if (args.key === "ArrowDown"){
            if (args.ctrl){
                return model.add(state, -5);
            }
            return model.add(state, -1);
        }
        else if (args.key === "0"){
            return model.reset(state);
        }
        else {
            return {count: state.count};
        }
    }

    const controller = { onMouseDown, onKeyDown };
    const model = { add, reset };
    return { controller, model };
}

function chronometer(){
    function timePassed(state, dt){
        return {elapsedTime: state.elapsedTime + dt};
    }

    function onTimerTick(state, dt) {
        return timePassed(state, dt);
    }
    const controller = { onTimerTick };
    const model = { timePassed };
    return { controller, model };
}

function chronometer2(){
    function timePassed(state, dt){
        if (state.active){
            return {elapsedTime: state.elapsedTime + dt, active: state.active};
        }
        return state;
    }

    function toggle(state){
        return {elapsedTime: state.elapsedTime, active: !state.active}
    }

    function reset(state){
        return {elapsedTime: 0, active: state.active};
    }

    function onKeyDown(state, args){
        if (args.key === " "){
            return model.toggle(state);
        }
        if (args.key === "0"){
            return model.reset(state);
        }
    }

    function onTimerTick(state, dt){
        return timePassed(state, dt);
    }

    const controller = { onTimerTick, onKeyDown };
    const model = { timePassed, toggle, reset };
    return { controller, model };
}

function circle(){

    function render(state){
        return [{type: "circle", center: {x: 100, y: 100}, radius: 10, color: "red"}];
    }

    const controller = {};
    const model = {};
    const view = { render };
    return { view, model, controller };
}

function circle2(){

    function render(state){
        return [{type: "circle", center: {x: 100, y: 100}, radius: 10, color: "red"}];
    }

    function moveTo(state, position){
        return {position: position};
    }

    function onMouseDown(state, args){
        return model.moveTo(state, state.position);
    }

    const controller = { onMouseDown };
    const model = { moveTo };
    const view = { render };
    return { view, model, controller };
}