$(document).ready(function () {
    // Initialize - hide sections
    $('.image-section').hide();
    $('.loader-container').hide();
    $('#result-section').hide();

    // Drag and Drop functionality
    const dropZone = $('#drop-zone');
    
    dropZone.on('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('dragover');
    });

    dropZone.on('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('dragover');
    });

    dropZone.on('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('dragover');
        
        const files = e.originalEvent.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            // Check if file is an image
            if (file.type.match('image.*')) {
                // Manually set the file to the input
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                document.getElementById('imageUpload').files = dataTransfer.files;
                
                // Trigger the change event
                $('#imageUpload').trigger('change');
            } else {
                alert('Please upload an image file (JPG, JPEG, or PNG)');
            }
        }
    });

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    // File input change event
    $("#imageUpload").change(function () {
        const file = this.files[0];
        
        // Validate file size (10MB max)
        if (file && file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB');
            this.value = '';
            return;
        }
        
        // Validate file type
        if (file && !file.type.match('image.*')) {
            alert('Please upload an image file (JPG, JPEG, or PNG)');
            this.value = '';
            return;
        }
        
        if (file) {
            $('.upload-container').slideUp(400);
            $('.image-section').slideDown(600);
            $('#btn-predict').show();
            $('#result-section').hide();
            readURL(this);
        }
    });

    // Reset button - upload another image
    $('#btn-reset').click(function() {
        // Clear the file input
        $('#imageUpload').val('');
        
        // Hide sections
        $('.image-section').slideUp(400);
        $('#result-section').slideUp(400);
        
        // Show upload section
        setTimeout(function() {
            $('.upload-container').slideDown(600);
        }, 400);
        
        // Clear preview
        $('#imagePreview').css('background-image', 'none');
    });

    // Predict button click event
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('#btn-reset').hide();
        $('.loader-container').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Hide loader
                $('.loader-container').fadeOut(300);
                
                // Process and display the result
                setTimeout(function() {
                    displayResult(data);
                }, 300);
            },
            error: function(xhr, status, error) {
                // Hide loader
                $('.loader-container').fadeOut(300);
                
                // Show error message
                setTimeout(function() {
                    $('#result-section').show();
                    $('#result').removeClass('deepfake authentic');
                    $('#result').html(
                        '<i class="fas fa-exclamation-triangle"></i>' +
                        '<p style="color: #f59e0b; margin-top: 1rem;">An error occurred during analysis. Please try again.</p>'
                    );
                    $('#btn-predict').show();
                    $('#btn-reset').show();
                }, 300);
                
                console.error('Error:', error);
            }
        });
    });

    // Function to display results with styling
    function displayResult(data) {
        const resultSection = $('#result-section');
        const resultCard = $('#result');
        
        // Clear previous classes
        resultCard.removeClass('deepfake authentic');
        
        // Check if it's a deepfake
        if (data.toLowerCase().includes('deepfake')) {
            resultCard.addClass('deepfake');
            resultCard.html(
                '<i class="fas fa-exclamation-circle"></i>' +
                '<p style="margin: 1rem 0 0 0;"><strong>⚠️ Warning: Deepfake Detected!</strong></p>' +
                '<p style="font-size: 1rem; font-weight: normal; margin-top: 0.5rem; color: #991b1b;">This image appears to be manipulated or artificially generated.</p>'
            );
        } else {
            resultCard.addClass('authentic');
            resultCard.html(
                '<i class="fas fa-check-circle"></i>' +
                '<p style="margin: 1rem 0 0 0;"><strong>✓ Authentic Image</strong></p>' +
                '<p style="font-size: 1rem; font-weight: normal; margin-top: 0.5rem; color: #065f46;">This image appears to be genuine and not manipulated.</p>'
            );
        }
        
        // Show result with animation
        resultSection.fadeIn(600);
        
        // Show buttons again
        $('#btn-reset').show();
        
        // Scroll to result
        $('html, body').animate({
            scrollTop: resultSection.offset().top - 100
        }, 600);
    }

    // Prevent default drag behaviors on the whole page
    $(document).on('dragover drop', function(e) {
        e.preventDefault();
    });
});
