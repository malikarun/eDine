#!/usr/bin/env node

var gulp = global.gulp = require('gulp');
require('../../gulpfile.js');

gulp.start('build');
