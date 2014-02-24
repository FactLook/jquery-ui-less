$(document).ready(function () {
    lastsel3 = '';
    function pickdates(id){
        jQuery("#"+id+"_headline","#articles").datepicker();
    }
    $('#datepicker').datepicker();
    jQuery("#articles").jqGrid({
        datatype: "json",

        url: "assets/article-grd-data.js",

        colNames:['Id','Headline', 'Subline', 'Body','Author'],
        colModel:[
            {name:'id',index:'id', width:30, sorttype:"int", editable:false},
            {name:'headline',index:'headline', width:150,editable:true,editrules:{text:true}, sorttype:"date"},
            {name:'subline',index:'subline', width:150,editable:true,editrules:{text:true}},
            {name:'body',index:'body', width:250, align:"left",editable:true,editrules:{text:true},sorttype:"text"},
            {name:'author',index:'author', width:120, align:"left",editable:true,editrules:{text:true},sorttype:"float"},
            
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