function(doc) { if(doc.doctype != 'zone' && doc.geometry){ emit(doc.created_at,{'id':doc._id, 'geometry':doc.geometry, 'reporter':doc.reporter, 'comment':doc.comment, 'created_at':doc.created_at, 'deviceuser_identifier':doc.deviceuser_identifier } ); } }
