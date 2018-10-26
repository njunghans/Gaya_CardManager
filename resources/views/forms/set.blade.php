{{csrf_field()}}

<div class="form-group row">
    {{ Form::label('name' , 'Name:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::text('name' , null , array('class' => 'form-control', 'required')) }}
    </div>
</div>

<div class="form-group row">
    {{ Form::label('description' , 'Description:' , array('class' => 'col-sm-2 control-label')) }}
    <div class="col-sm-5">
        {{ Form::textarea('description' , null , ['rows' => '4' , 'class' => 'form-control' , 'placeholder' => 'Enter description here']) }}
    </div>
</div>
