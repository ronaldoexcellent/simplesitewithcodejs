loadApp();
// Create layout
layout.create();
// Add header content
html($('header'), `<span><font onclick="$('nav').style.width='50%'">&equiv;</font>${app.name}</span>`);
// Create links
$links = ['&times;', 'Home', 'Services', 'Contacts', 'About'];
widgets.constructMultiple('a', $links.length);
renderAll($('nav'), widget);
loop($links, ()=>{
    html($$('nav a')[i], $links[i]);
});
// Create pages & assign functions to links
var link = $$('nav a');
click(link[0], () => {
    addClass(widget, 'closenav');
    $('nav').style.width='0';
});
function switchPages(e) {
    loadContent(()=>{
        switch_content('.pages', '#' + html(e.target));
        removeContent($('title'), '#');
    });
}
rangeSelect(1, $links.length - 1, ()=>{
    widgets.construct('section');
    attrib(widget, 'id', $links[i]);
    addClass(widget, 'pages');
    html(widget, `<object data="pages/${$links[i].toLowerCase()}.html"></object>`);
    render($('main'), widget);
    click(link[i], () => {
        $('nav').style.width='0';
        switchPages(event);
    });
});
// Footer contents
html($('footer'), app.footnote());