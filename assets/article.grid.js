$(document).ready(function () {

    var data = [
    {
    "id": "1",
    "headline": "New Headline",
    "subline": "subheader for article",
    "body": "edited the article",
    "author": "another author",
    "date": "2009-09-10 02:06:00",
    "country": "GE",
    "city": "Hamburg"
    } ,
    {
     "id": "2",
     "headline": "Another Article",
        "subline": "jo subline", "body": "Der Textkörper der ganzen Sache", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GE", "city": "Hamburg" } , { "id": "3", "headline": "Lets have some more Articles", "subline": "I can haz sum ?", "body": "this would be very nice", "author": "phil", "date": "2009-01-01 00:00:00", "country": "de", "city": "Berlin" } , { "id": "4", "headline": "Something else", "subline": "Jepp", "body": "this is a test", "author": "bernd", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "10", "headline": "New Headline", "subline": "It marvellous", "body": "jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw ", "author": "another", "date": "2009-01-01 00:00:00", "country": "GE", "city": "Hamburg" } , { "id": "11", "headline": "New Headline", "subline": "It marvellous", "body": "jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  ", "author": "another", "date": "2009-01-01 00:00:00", "country": "GE", "city": "Hamburg" } , { "id": "12", "headline": "New Headline", "subline": "It marvellous", "body": "jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  ", "author": "another", "date": "2009-01-01 00:00:00", "country": "GE", "city": "Hamburg" } , { "id": "13", "headline": "Lets have some more Articles", "subline": "I can haz sum ?", "body": "jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  ", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "14", "headline": "Lets have some more Articles", "subline": "I can haz sum ?", "body": "jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  ", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "15", "headline": "Lets have some more Articles", "subline": "I can haz sum ?", "body": "jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  jhgc gjg gi h.wlofs hfjer jgfkw fkjhwlkfjw  ", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "18", "headline": "Headline moderate style", "subline": "lite subline", "body": "some text for the body", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "19", "headline": "Headline moderate style", "subline": "lite subline", "body": "some text for the body", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "20", "headline": "Headline moderate style", "subline": "lite subline", "body": "some text for the body", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "21", "headline": "Headline moderate style", "subline": "lite subline", "body": "some text for the body", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } , { "id": "22", "headline": "Headline moderate style", "subline": "lite subline", "body": "some text for the body", "author": "Ich", "date": "2009-01-01 00:00:00", "country": "GB", "city": "London" } ],
    lastsel3 = '';
    function pickdates(id){
        jQuery("#"+id+"_headline","#articles").datepicker();
    }
    $('#datepicker').datepicker();
    jQuery("#articles").jqGrid({
        datatype: "local",
        data: data,

        colNames:['Id','Headline', 'Subline', 'Body','Author'],
        colModel:[
            {name:'id',index:'id', width:40, sorttype:"int", editable:false},
            {name:'headline',index:'headline', width:150, editable:true, editrules:{text:true}},
            {name:'subline',index:'subline', width:150, editable:true, editrules:{text:true}},
            {name:'body',index:'body', width:250, align:"left", editable:true, editrules:{text:true}},
            {name:'author',index:'author', width:120, align:"left", editable:true, editrules:{text:true}},

        ],
        onSelectRow: function(id){
            //alert(id);
            if(id && id!==lastsel3){
                $('#articles').jqGrid('restoreRow',lastsel3);
                $('#articles').jqGrid('editRow',id,true,pickdates);
                lastsel3=id;
            }
        },
        rowNum: 8,
        height: 'auto',
        search: true,
        rowList:[5,8,30],
        pager: '#articlePager',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        multiselect: false,
        loadonce: true,
        jsonReader: {
            repeatitems : false
        },
        editurl: 'edit/article/json', // this is dummy existing url
        caption: "My jsgrid Example"
    });
    $("#articles").jqGrid('navGrid','#articlePager',
        {
            edit:true,
            add:true,
            del:true,
            search:true
        }
    );
});
