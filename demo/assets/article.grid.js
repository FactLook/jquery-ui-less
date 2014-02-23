$(document).ready(function () {
    lastsel3 = '';
    function pickdates(id){
        jQuery("#"+id+"_date","#articles").datepicker();
    }
    $('#datepicker').datepicker();
    jQuery("#articles").jqGrid({
        datatype: "json",

        url: "assets/article-grd-data.js",

        colNames:['Id','Headline', 'Subline', 'Body','Author','Date','Country','City'],
        colModel:[
            {name:'id',index:'id', width:20, sorttype:"int", editable:false},
            {name:'headline',index:'headline', width:150,editable:true,editrules:{text:true}, sorttype:"date"},
            {name:'subline',index:'subline', width:150,editable:true,editrules:{text:true}},
            {name:'body',index:'body', width:250, align:"left",editable:true,editrules:{text:true},sorttype:"text"},
            {name:'author',index:'author', width:80, align:"left",editable:true,editrules:{text:true},sorttype:"float"},
            {name:'date',index:'date', width:74,align:"left",editable:true},
            {name:'country',index:'country', width:30,align:"center",editable:true,editrules:{text:true}, sortable:false},
            {name:'city',index:'city', width:100,editable:true,editrules:{text:true}, sortable:false}
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
        multiselect: true,
        loadonce: true,
        jsonReader: {
            repeatitems : false
        },
        editurl: 'edit/article/json', // this is dummy existing url
        caption: "My jQgrid-Example"
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