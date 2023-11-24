<script src="https://cdn.ckeditor.com/ckeditor5/34.0.0/classic/ckeditor.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		//Replace the <textarea id="smart_content"> with a CKEditor
		//instance, using default configuration.
		if($("#act_cont").length > 0) {
			CKEDITOR.replace( 'act_cont' );
		}

	});
</script>
