!function(t){"function"==typeof define&&define.amd?define(["jquery","inputmask"],t):"object"==typeof exports?module.exports=t(require("jquery"),require("./inputmask")):t(jQuery,window.Inputmask)}(function(t,i){return void 0===t.fn.inputmask&&(t.fn.inputmask=function(s,e){var n,a;if(e=e||{},"string"==typeof s)switch(s){case"mask":return n=new i(e),this.each(function(){n.mask(this)});case"unmaskedvalue":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.unmaskedvalue():t(a).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.getemptymask():"";case"hasMaskedValue":return a=this.jquery&&this.length>0?this[0]:this,!!a.inputmask&&a.inputmask.hasMaskedValue();case"isComplete":return a=this.jquery&&this.length>0?this[0]:this,!a.inputmask||a.inputmask.isComplete();case"getmetadata":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.getmetadata():void 0;case"setvalue":a=this.jquery&&this.length>0?this[0]:this,t(a).val(e),void 0!==a.inputmask&&t(a).triggerHandler("setvalue.inputmask");break;case"option":if("string"!=typeof e)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(e)});if(a=this.jquery&&this.length>0?this[0]:this,void 0!==a.inputmask)return a.inputmask.option(e);break;default:return e.alias=s,n=new i(e),this.each(function(){n.mask(this)})}else{if("object"==typeof s)return n=new i(s),void 0===s.mask&&void 0===s.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(s):void n.mask(this)}):this.each(function(){n.mask(this)});if(void 0===s)return this.each(function(){n=new i(e),n.mask(this)})}}),t.fn.inputmask});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5tYXNrZWRpbnB1dC5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJqUXVlcnkiLCJ3aW5kb3ciLCJJbnB1dG1hc2siLCIkIiwidW5kZWZpbmVkIiwiZm4iLCJpbnB1dG1hc2siLCJvcHRpb25zIiwibnB0bWFzayIsImlucHV0IiwidGhpcyIsImVhY2giLCJtYXNrIiwianF1ZXJ5IiwibGVuZ3RoIiwidW5tYXNrZWR2YWx1ZSIsInZhbCIsInJlbW92ZSIsImdldGVtcHR5bWFzayIsImhhc01hc2tlZFZhbHVlIiwiaXNDb21wbGV0ZSIsImdldG1ldGFkYXRhIiwidHJpZ2dlckhhbmRsZXIiLCJvcHRpb24iLCJhbGlhcyJdLCJtYXBwaW5ncyI6IkNBUUMsU0FBVUEsR0FDbUIsa0JBQVhDLFNBQXlCQSxPQUFPQyxJQUN2Q0QsUUFBUSxTQUFVLGFBQWNELEdBQ04sZ0JBQVpHLFNBQ2RDLE9BQU9ELFFBQVVILEVBQVFLLFFBQVEsVUFBV0EsUUFBUSxnQkFFcERMLEVBQVFNLE9BQVFDLE9BQU9DLFlBRzlCLFNBQVVDLEVBQUdELEdBa0ZWLE1BakZ1QkUsVUFBbkJELEVBQUVFLEdBQUdDLFlBRUxILEVBQUVFLEdBQUdDLFVBQVksU0FBVUQsRUFBSUUsR0FDM0IsR0FBSUMsR0FBU0MsQ0FFYixJQURBRixFQUFVQSxNQUNRLGdCQUFQRixHQUNQLE9BQVFBLEdBQ0osSUFBSyxPQUVELE1BREFHLEdBQVUsR0FBSU4sR0FBVUssR0FDakJHLEtBQUtDLEtBQUssV0FDYkgsRUFBUUksS0FBS0YsT0FFckIsS0FBSyxnQkFFRCxNQURBRCxHQUFRQyxLQUFLRyxRQUFVSCxLQUFLSSxPQUFTLEVBQUlKLEtBQUssR0FBS0EsS0FDNUNELEVBQU1ILFVBQVlHLEVBQU1ILFVBQVVTLGdCQUFrQlosRUFBRU0sR0FBT08sS0FDeEUsS0FBSyxTQUNELE1BQU9OLE1BQUtDLEtBQUssV0FDVEQsS0FBS0osV0FBV0ksS0FBS0osVUFBVVcsVUFFM0MsS0FBSyxlQUVELE1BREFSLEdBQVFDLEtBQUtHLFFBQVVILEtBQUtJLE9BQVMsRUFBSUosS0FBSyxHQUFLQSxLQUM1Q0QsRUFBTUgsVUFBWUcsRUFBTUgsVUFBVVksZUFBaUIsRUFDOUQsS0FBSyxpQkFFRCxNQURBVCxHQUFRQyxLQUFLRyxRQUFVSCxLQUFLSSxPQUFTLEVBQUlKLEtBQUssR0FBS0EsT0FDNUNELEVBQU1ILFdBQVlHLEVBQU1ILFVBQVVhLGdCQUM3QyxLQUFLLGFBRUQsTUFEQVYsR0FBUUMsS0FBS0csUUFBVUgsS0FBS0ksT0FBUyxFQUFJSixLQUFLLEdBQUtBLE1BQzVDRCxFQUFNSCxXQUFZRyxFQUFNSCxVQUFVYyxZQUM3QyxLQUFLLGNBRUQsTUFEQVgsR0FBUUMsS0FBS0csUUFBVUgsS0FBS0ksT0FBUyxFQUFJSixLQUFLLEdBQUtBLEtBQzVDRCxFQUFNSCxVQUFZRyxFQUFNSCxVQUFVZSxjQUFnQmpCLE1BQzdELEtBQUssV0FDREssRUFBUUMsS0FBS0csUUFBVUgsS0FBS0ksT0FBUyxFQUFJSixLQUFLLEdBQUtBLEtBQ25EUCxFQUFFTSxHQUFPTyxJQUFJVCxHQUNXSCxTQUFwQkssRUFBTUgsV0FDTkgsRUFBRU0sR0FBT2EsZUFBZSxxQkFFNUIsTUFDSixLQUFLLFNBQ0QsR0FBdUIsZ0JBQVpmLEdBTVAsTUFBT0csTUFBS0MsS0FBSyxXQUNiLEdBQXVCUCxTQUFuQk0sS0FBS0osVUFDTCxNQUFPSSxNQUFLSixVQUFVaUIsT0FBT2hCLElBTnJDLElBREFFLEVBQVFDLEtBQUtHLFFBQVVILEtBQUtJLE9BQVMsRUFBSUosS0FBSyxHQUFLQSxLQUMzQk4sU0FBcEJLLEVBQU1ILFVBQ04sTUFBT0csR0FBTUgsVUFBVWlCLE9BQU9oQixFQVN0QyxNQUNKLFNBR0ksTUFGQUEsR0FBUWlCLE1BQVFuQixFQUNoQkcsRUFBVSxHQUFJTixHQUFVSyxHQUNqQkcsS0FBS0MsS0FBSyxXQUNiSCxFQUFRSSxLQUFLRixZQUd0QixDQUFBLEdBQWlCLGdCQUFOTCxHQUVkLE1BREFHLEdBQVUsR0FBSU4sR0FBVUcsR0FDUkQsU0FBWkMsRUFBR08sTUFBbUNSLFNBQWJDLEVBQUdtQixNQUNyQmQsS0FBS0MsS0FBSyxXQUNiLE1BQXVCUCxVQUFuQk0sS0FBS0osVUFDRUksS0FBS0osVUFBVWlCLE9BQU9sQixPQUMxQkcsR0FBUUksS0FBS0YsUUFHakJBLEtBQUtDLEtBQUssV0FDYkgsRUFBUUksS0FBS0YsT0FHbEIsSUFBV04sU0FBUEMsRUFFUCxNQUFPSyxNQUFLQyxLQUFLLFdBQ2JILEVBQVUsR0FBSU4sR0FBVUssR0FDeEJDLEVBQVFJLEtBQUtGLFdBS3RCUCxFQUFFRSxHQUFHQyIsImZpbGUiOiJqcXVlcnkubWFza2VkaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBJbnB1dCBNYXNrIHBsdWdpbiBmb3IganF1ZXJ5XHJcbiAqIGh0dHA6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9qcXVlcnkuaW5wdXRtYXNrXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCAtXHRSb2JpbiBIZXJib3RzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXHJcbiAqIFZlcnNpb246IDAuMC4wLWRldlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgICAgICBkZWZpbmUoW1wianF1ZXJ5XCIsIFwiaW5wdXRtYXNrXCJdLCBmYWN0b3J5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9pbnB1dG1hc2tcIikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZhY3RvcnkoalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAoZnVuY3Rpb24gKCQsIElucHV0bWFzaykge1xyXG4gICAgICAgIGlmICgkLmZuLmlucHV0bWFzayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vanF1ZXJ5IHBsdWdpblxyXG4gICAgICAgICAgICAkLmZuLmlucHV0bWFzayA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5wdG1hc2ssIGlucHV0O1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFza1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnB0bWFzayA9IG5ldyBJbnB1dG1hc2sob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVubWFza2VkdmFsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5qcXVlcnkgJiYgdGhpcy5sZW5ndGggPiAwID8gdGhpc1swXSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSA6ICQoaW5wdXQpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dG1hc2spIHRoaXMuaW5wdXRtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRlbXB0eW1hc2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5qcXVlcnkgJiYgdGhpcy5sZW5ndGggPiAwID8gdGhpc1swXSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmdldGVtcHR5bWFzaygpIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhhc01hc2tlZFZhbHVlXCI6IC8vY2hlY2sgd2hldGVyIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBtYXNrZWQgb3Igbm90OyBjdXJyZW50bHkgb25seSB3b3JrcyByZWxpYWJsZSB3aGVuIHVzaW5nIGpxdWVyeS52YWwgZm4gdG8gcmV0cmlldmUgdGhlIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHRoaXMuanF1ZXJ5ICYmIHRoaXMubGVuZ3RoID4gMCA/IHRoaXNbMF0gOiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmlucHV0bWFzayA/IGlucHV0LmlucHV0bWFzay5oYXNNYXNrZWRWYWx1ZSgpIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IHRoaXMuanF1ZXJ5ICYmIHRoaXMubGVuZ3RoID4gMCA/IHRoaXNbMF0gOiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmlucHV0bWFzayA/IGlucHV0LmlucHV0bWFzay5pc0NvbXBsZXRlKCkgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ2V0bWV0YWRhdGFcIjogLy9yZXR1cm4gbWFzayBtZXRhZGF0YSBpZiBleGlzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5qcXVlcnkgJiYgdGhpcy5sZW5ndGggPiAwID8gdGhpc1swXSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmdldG1ldGFkYXRhKCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZXR2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSB0aGlzLmpxdWVyeSAmJiB0aGlzLmxlbmd0aCA+IDAgPyB0aGlzWzBdIDogdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaW5wdXQpLnZhbChvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dG1hc2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaW5wdXQpLnRyaWdnZXJIYW5kbGVyKFwic2V0dmFsdWUuaW5wdXRtYXNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcHRpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGhpcy5qcXVlcnkgJiYgdGhpcy5sZW5ndGggPiAwID8gdGhpc1swXSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmlucHV0bWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnB1dG1hc2sub3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0bWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2sub3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWxpYXMgPSBmbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdG1hc2sgPSBuZXcgSW5wdXRtYXNrKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnB0bWFzay5tYXNrKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZm4gPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5wdG1hc2sgPSBuZXcgSW5wdXRtYXNrKGZuKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm4ubWFzayA9PT0gdW5kZWZpbmVkICYmIGZuLmFsaWFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dG1hc2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzay5vcHRpb24oZm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG5wdG1hc2subWFzayh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZm4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vayBmb3IgZGF0YS1pbnB1dG1hc2sgYXRyaWJ1dGVzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5wdG1hc2sgPSBuZXcgSW5wdXRtYXNrKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAkLmZuLmlucHV0bWFzaztcclxuICAgIH0pKTtcclxuIl19
