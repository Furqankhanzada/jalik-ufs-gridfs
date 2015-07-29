Package.describe({
    name: 'jalik:ufs-gridfs',
    version: '0.1.0',
    author: 'karl.stein.pro@gmail.com',
    summary: 'GridFS store for UploadFS',
    homepage: 'https://github.com/jalik/jalik-ufs-gridfs',
    git: 'https://github.com/jalik/jalik-ufs-gridfs.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use('jalik:ufs@0.2.2');
    api.addFiles('ufs-gridfs.js');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('jalik:ufs-gridfs');
    api.addFiles('ufs-gridfs-tests.js');
});