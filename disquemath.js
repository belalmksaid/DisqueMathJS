function vector(x, y) {
	this.x = x;
	this.y = y;
	this.add = function(b) {
		return addv(this, b);
	}
	this.scale = function(s) {
		return scalev(this, s);
	}
	this.subt = function(b) {
		return addv(this, b.scale(-1));
	}
}

function v(x, y) {
	return new vector(x, y);
}

function addv(a, b) {
	return new vector(a.x + b.x, a.y + b.y);
}

function scalev(a, s) {
	return new vector(a.x * s, a.y * s);
}

function subtv(a, b) {
	return a.subt(b);
}

function ZERO() {
	return new vector(0, 0);
}

var Disque = {
	random: function(min, max) {
		return (Math.random() * (max - min + 1) + min);
	}
};